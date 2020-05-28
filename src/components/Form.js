import styled from "styled-components";
import {Colors} from "../theme/theme";
import React from "react";

const InputContainer = styled.div`
    text-align: center;
    color:white;
    display: block;
    width:100%;
    max-width: 600px;
    label {
    text-align: left;
      font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        color: white;
        transition: all .3s;
    }
`

const TextArea = styled.textarea``

const StyledForm = styled.form`
    margin:0 auto;
    font-size: 1.6rem;
    padding:4rem;
    width: 60%;
    background-color: rgba(${Colors.primaryRGB}, .8);
  
  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  textarea {
    resize: none;
  }
  
  input, textarea {
    font-size: 1.5rem;
    font-family: inherit;
    background-color: #ffffff42;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    border-bottom: 3px solid transparent;
    width: 90%;
    transition: all .3s;

        &:focus {
          outline: none;
          border-bottom: 3px solid blue;
        }
    
        &:focus:invalid {
          border-bottom: 3px solid purple;
        }
    
        &::-webkit-input-placeholder {
          color: black;
        }
    }
`

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const {status} = this.state;
        return (
            <StyledForm
                onSubmit={this.submitForm}
                action="https://formspree.io/xknqjqye"
                method="POST"
            >
                <InputContainer>

                    <label>Email:</label>
                    <input type="email" name="email" placeholder={"example@gmail.com"} required/>

                </InputContainer>
                <InputContainer>
                    <label>Message:</label>
                    <TextArea type="textarea" name="message" required/>
                </InputContainer>
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </StyledForm>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }
}