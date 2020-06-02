import styled from "styled-components";
import {Colors} from "../theme/theme";
import React from "react";

const InputContainer = styled.div`
    text-align: left;
    color:white;
    display: block;
    width:100%;
    max-width: 600px;
    label {
        font-size: 1.7rem;
        font-weight: 700;
        margin-top: .7rem;
        display: block;
        color: white;
        transition: all .3s;
    }
`

const TextArea = styled.textarea`
margin-bottom: 1rem;
color:${Colors.white};
`

const StyledForm = styled.form`
    text-align: center;
    border: 3px solid rgba( ${Colors.primaryRGB}, .8);
    margin:0 auto;
    font-size: 1.6rem;
    padding:4rem;
    display: inline-block;
    width: 50%;
  
  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  textarea {
    resize: none;
  }
  
  input::placeholder {
   color: ${Colors.white};
   display:none;
  }
  
  input {
    color: ${Colors.white};
   border: none;
  }
  
  input, textarea {
    font-size: 1.5rem;
    font-family: inherit;
    background-color: #ffffff42;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    border-bottom: 3px solid transparent;
    width: 100%;
    transition: all .3s;

        &:focus {
          outline: none;
          border-bottom: 3px solid ${Colors.primary};
        }
    
        &:focus:invalid {
          border-bottom: 3px solid ${Colors.tertiary};
        }
    
        &::-webkit-input-placeholder {
          color: ${Colors.white};
        }
    }
    
    @media (max-width: 425px){
      width: 100%;
    }
`

const Input = styled.input`
 
`

const Button = styled.button`
  padding:1.5rem 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 3px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  box-shadow: none;
  border:none;
  outline:none;
  
  &:hover {
    background-color: ${Colors.primaryLight};
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
                    <Input type="email" name="email"  required/>
                </InputContainer>
                <InputContainer>
                    <label>Message:</label>
                    <TextArea type="textarea" name="message" rows="8" required/>
                </InputContainer>
                {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
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