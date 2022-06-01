import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import '../../assets/subTypes/subtypee.css';
export default class CreateSubmission extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeSubmissionTopic = this.onChangeSubmissionTopic.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
        Submission_Topic: '',
        Deadline: '',
        Description: '',
        fileCollection: ''

    }
  }
  onChangeSubmissionTopic(e) {
    this.setState({ Submission_Topic: e.target.value })
  }
  onChangeDeadline(e) {
    this.setState({ Deadline: e.target.value })
  }
  onChangeDescription(e) {
    this.setState({ Description: e.target.value })
  }
  //file submission
  onFileChange(e){
    this.setState({ fileCollection: e.target.files})
  }
  onUpload(e) {
    e.preventDefault()
    var formData = new FormData();
    for (const key of Object.keys(this.state.fileCollection)) {
      formData.append('fileCollection', this.state.fileCollection[key])
  }
  axios.post("http://localhost:8000/admin/upload-files", formData, {
  }).then(res => {
      console.log(res.data)
  })
  const Swal = require('sweetalert2');
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'File Uploaded!',
    showConfirmButton: false,
    timer: 1800
  })
  }
  //end file submission
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      Submission_Topic: this.state.Submission_Topic,
      Deadline: this.state.Deadline,
      Description: this.state.Description
    };
    axios.post('http://localhost:8000/admin/create-submission', studentObject)
      .then(res => console.log(res.data));
    this.setState({ Submission_Topic: '', Deadline: '', Description: '' })

    const Swal = require('sweetalert2');
      Swal.fire({
        title: 'Success!',
        text: 'Submission Type Created Successfully',
        icon: 'success',
        confirmButtonText: 'Close',
      });

  }

  render() {
    return (
        <div className="CreateSubmission">
          <div>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Create Submission Types</div>
                
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">SLIIT Research Management Tool</h3>
                <p className="text-muted text-sm mb-5">
                  you can create submission types for students , panel members & supervisors.
                </p>
               
                <form action="onSubmit">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="Submission_Topic"
                          type="text"
                          placeholder="name"
                          required
                          value={this.state.Submission_Topic} onChange={this.onChangeSubmissionTopic}
                        />
                        <label for="Submission_Topic">Submission Topic</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="Deadline"
                          type="date"
                          placeholder="date"
                          required
                          value={this.state.Deadline} onChange={this.onChangeDeadline}
                        />
                        <label for="Deadline"> Deadline</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="Description"
                          type="text"
                          placeholder="Description"
                          required
                          value={this.state.Description} onChange={this.onChangeDescription}
                        />
                        <label for="Description"> Description</label>
                      </div>
                      <div className="form-floating mb-3">
                                                                                 
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          id="register"
                          type="button"
                          name="registerSubmit"
                          onClick={this.onSubmit}
                        >
                          Submit
                        </button>
                      </div>
                  
                    
                    </div>
                  </div>
                 
                </form>
                <form onSubmit={this.onUpload}>
                <p className="text-muted text-sm mb-5" id="sent">
                  If you want attached files with submission type, please upload relevent files!!.
                </p>
                        <div className="form-group" id="fl">
                            <input type="file" name="fileCollection" onChange={this.onFileChange} multiple />
                        </div>
                        <br/>
                        <div className="form-group" id="fl2">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                <div className="container">
                <div className="row">
                 
                </div>
            </div>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted"></div>
              </div>
            </div>
            
          </div>
          
        </div>
      )
     
  }


}