import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            email: "",
            number: "",
            company: "",
            description: "",
            helperText: ["","","",""],
            errorStatus:[false, false, false, false],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };
    handleChange = number => event => {
        this.setState({
            [number]: event.target.value,
        });
    };
    handleChange = company => event => {
        this.setState({
            [company]: event.target.value,
        });
    };
    handleChange = description => event => {
        this.setState({
            [description]: event.target.value,
        });
    };
    handleClick(e) {
        let helperText = Object.assign(this.state.helperText);
        let emptyHelperText = [
                "You need to have an email",
                "Please supply us with a phone number we can contact",
                "We need to know who you represent, please write your company name",
                "Please write a short description of what your company wants"
            ]
        let text = [
            this.state.email,
            this.state.number,
            this.state.company,
            this.state.description
        ]
        let checklist: 0;
        text.forEach(function (item, index){
            if (item !== ""){
                checklist+=1;
                helperText[index] = ""
            }
            else{
                helperText[index] = emptyHelperText[index]
            }
        });
        if(checklist > 1){
            this.setState({
                completed: true
            });
        }
        else this.setState({ helperText:helperText })
        console.log('The link was clicked.' + checklist + ' fields was correct.');
    }

    render() {
        const { classes } = this.props;
        if (this.state.completed === true){
            return (
                <React.Fragment>
                    <h2>Mottatt!</h2>
                    <p>Du vil bli kontaktet på {this.state.email} </p>
                </React.Fragment>
            );
        }
        else return (
            <form className={classes.container} autoComplete="off">
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    type="email"
                    name="email"
                    helperText={this.state.helperText[0]}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Mobil"
                  className={classes.textField}
                  value={this.state.number}
                  onChange={this.handleChange('number')}
                  helperText={this.state.helperText[1]}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  id="outlined-name"
                  label="Firmanavn"
                  className={classes.textField}
                  value={this.state.company}
                  onChange={this.handleChange('company')}
                  helperText={this.state.helperText[2]}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Fortell litt om din bedrift..."
                  multiline
                  rows="4"
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  className={classes.textField}
                  helperText={this.state.helperText[3]}
                  margin="normal"
                  variant="outlined"
                />
                <div className="flex-container">
                    <Button onClick={this.handleClick} variant="contained" size="large" color="primary" className= {classes.margin + " flex-item"} >
                        Send
                    </Button>
                </div>
            </form>
        );
    }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
