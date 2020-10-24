import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import { submit as submitAskUs } from '../reducers/askus';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


@connect(
  (state) => ({
    askData: state.askus.data,
    askSubmiting: state.askus.submiting,
    askSubmited: state.askus.submited,
  }), {
  submitAskUs
}
)

@reduxForm(
  {
    form: 'askus',
    fields: [
      'name',
      'division',
      'questions'
    ],
  }
)

class AskUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      submitAskUs,
      handleSubmit,
      pristine,
      reset,
      submitting,
      askSubmiting,
      askSubmited
    } = this.props;
    const modSubmit = (data) => {
      console.log(data)
      submitAskUs(data).then(res => {
        toast.success('Questions asked!')
      });
      // reset();
    }
    return (
      <div className="askus-components">
        <h5 className="text-danger">Ask Us</h5>
        {askSubmiting &&
          <div className="d-flex align-items-center justify-content-center">
            <Loader></Loader>
          </div>
        }
        {!askSubmiting &&
          <form className="asking-form"
            onSubmit={
              handleSubmit((data) => {
                modSubmit(data);
              })
            }>
            <FormGroup>
              <Label for="exampleSelect">Division</Label>
              <Field name="division" placeholder="Select Division" className="form-control" component="select">
                <option />
                <option value="tech" defaultValue>Tech</option>
                <option value="marketing">Marketing</option>
                <option value="ux">UX</option>
              </Field>
            </FormGroup>

            <FormGroup>
              <Label for="askname">Name</Label>
              <Field placeholder="Name" className="form-control" name="name" component="input" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="questions">Questions</Label>
              <Field placeholder="Questions" name="questions" component="textarea" className="form-control" />
            </FormGroup>
            {askSubmited &&
              <FormGroup>
                <p className="text-success"><small>Questions has been asked.</small></p>
              </FormGroup>
            }
            <Button color="warning" disabled={pristine || submitting} className="mr-2">Submit</Button>
            <Button color="secondary" disabled={pristine || submitting} onClick={reset} className="mr-2">Reset</Button>
          </form>
        }
      </div>
    );
  }
}

export default AskUs;