import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../..actions";
// Allow user to create a new stream
class StreamCreate extends React.Component {
  /*display error when user deselects input fields*/
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    /*highlight error fields*/
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      /*onSubmit setup using Redux form*/
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/*want to show field(input) to user*/}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary"> Submit </button>
      </form>
    );
  }
}
/*validate users input*/
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    //only run if user didn't enter title
    errors.title = "Must enter a title";
  }

  //only run if user didn't enter description
  if (!formValues.description) {
    errors.description = "Must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
