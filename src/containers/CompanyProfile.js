import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label
} from 'reactstrap';
import logo from '../assets/img/logo.jpg';
import Loader from '../components/Loader';
import AskUs from '../components/AskUs';
import {profileValidate, renderField} from '../components/profileValidation';
import {submit as submitProfile} from '../reducers/profile';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

@connect(
  (state) => ({
    profileData: state.profile.data,
    profileSubmiting: state.profile.submiting,
    profileSubmited: state.profile.submited,
  }),{
    submitProfile,
  }
)

@reduxForm(
  {
    form: 'profile',
    fields: [
      'name',
      'description',
      'street',
      'city',
      'province',
      'postal_code',
    ],
  validate: profileValidate,
  },
)

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount(){
  }

  componentWillMount() {
  }

  render() {
    const {
      profileSubmiting,
      profileSubmited,
      handleSubmit,
      pristine,
      reset,
      submitting,
      submitProfile,
    } = this.props;
    const provinces = [
        {
            "id": 1,
            "name": "Bali",
        },
        {
            "id": 2,
            "name": "Bangka Belitung",
        },
        {
            "id": 3,
            "name": "Banten",
        },
        {
            "id": 4,
            "name": "Bengkulu",
        },
        {
            "id": 5,
            "name": "DI Yogyakarta",
        },
        {
            "id": 6,
            "name": "DKI Jakarta",
        },
        {
            "id": 7,
            "name": "Gorontalo",
        },
        {
            "id": 8,
            "name": "Jambi",
        },
        {
            "id": 9,
            "name": "Jawa Barat",
        },
        {
            "id": 10,
            "name": "Jawa Tengah",
        },
        {
            "id": 11,
            "name": "Jawa Timur",
        },
        {
            "id": 12,
            "name": "Kalimantan Barat",
        },
        {
            "id": 13,
            "name": "Kalimantan Selatan",
        },
        {
            "id": 14,
            "name": "Kalimantan Tengah",
        },
        {
            "id": 15,
            "name": "Kalimantan Timur",
        },
        {
            "id": 16,
            "name": "Kalimantan Utara",
        },
        {
            "id": 17,
            "name": "Kepulauan Riau",
        },
        {
            "id": 18,
            "name": "Lampung",
        },
        {
            "id": 19,
            "name": "Maluku",
        },
        {
            "id": 20,
            "name": "Maluku Utara",
        },
        {
            "id": 21,
            "name": "Nanggroe Aceh Darussalam (NAD)",
        },
        {
            "id": 22,
            "name": "Nusa Tenggara Barat (NTB)",
        },
        {
            "id": 23,
            "name": "Nusa Tenggara Timur (NTT)",
        },
        {
            "id": 24,
            "name": "Papua",
        },
        {
            "id": 25,
            "name": "Papua Barat",
        },
        {
            "id": 26,
            "name": "Riau",
        },
        {
            "id": 27,
            "name": "Sulawesi Barat",
        },
        {
            "id": 28,
            "name": "Sulawesi Selatan",
        },
        {
            "id": 29,
            "name": "Sulawesi Tengah",
        },
        {
            "id": 30,
            "name": "Sulawesi Tenggara",
        },
        {
            "id": 31,
            "name": "Sulawesi Utara",
        },
        {
            "id": 32,
            "name": "Sumatera Barat",
        },
        {
            "id": 33,
            "name": "Sumatera Selatan",
        },
        {
            "id": 34,
            "name": "Sumatera Utara",
        }
    ]
    return ([
      <div className="header" key="header">
      <ToastContainer key="toast"/>
      <Navbar color="faded" light>
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">
            <img src={logo} alt=""/>
          </NavbarBrand>
          <span>
            <Button color="primary"  disabled={pristine || submitting} className="mr-2"
              onClick={handleSubmit((data) =>{
                submitProfile(data)
                .then(res => {
                  toast.success('Form submited!', {position: toast.POSITION.TOP_CENTER})
                  reset()
                })
                .catch(err => {
                  toast.error('Failed to submit! '+ err.message, {position: toast.POSITION.TOP_CENTER})
                })
            })}>Submit</Button>
            <Button  disabled={pristine || submitting} onClick={reset} className="mr-2" >Cancel</Button>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://about.me/rebotak/" target="_blank">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/rebotak/" target="_blank">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </span>
        </div>
      </Navbar>
    </div>,
      <div className="profile-page profile-container" key="container">
        <div className="row form-profile-wrapper text-left">
          <div className="company-form col-sm-6">
          {profileSubmiting &&
            <div className="d-flex align-items-center justify-content-center">
              <Loader></Loader>
            </div>
          }
          {!profileSubmiting &&
            <Form>
              {profileSubmited &&
                <FormGroup>
                  <p className="text-success"><small>Questions has been asked.</small></p>
                </FormGroup>
              }
              <FormGroup>
                <Label for="name">Name</Label>
                <Field name="name" type="text" component={renderField} label="Name" />
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Field name="description" type="text" component={renderField} label="Description" />
              </FormGroup>

              <FormGroup>
                <Label for="street">Street</Label>
                <Field name="street" type="text" component={renderField} label="Street" />
              </FormGroup>

              <FormGroup>
                <Label for="city">City</Label>
                <Field label="City" className="form-control" name="city" component={renderField}  type="text" />
              </FormGroup>
              <FormGroup className="form-group d-flex align-items-start justify-content-start">
              <div className="province-form mr-2">
                <Label for="province">Province</Label>
                <Field name="province" placeholder="Select Province" className="form-control" component="select">
                {provinces &&
                  _.map(provinces, (prov) => {
                    return (
                      <option value={prov.name+prov.id} key={prov.id}>{prov.name}</option>
                    )
                  })
                }
                </Field>
              </div>
              <div className="zip-form">
                <Label for="postalCode">Postal Code</Label>
                <Field name="postal_code" type="text" component={renderField} label="Postal Code" />
              </div>
              </FormGroup>
            </Form>
          }
          </div>
          <div className="ask-us col-sm-6">
              <AskUs />
          </div>
        </div>

      </div>
    ]);
  }
}

export default CompanyProfile;