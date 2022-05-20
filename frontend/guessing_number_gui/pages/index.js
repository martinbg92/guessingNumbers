import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Form,Button } from 'semantic-ui-react'
import React, { useState } from 'react';
import axios from 'axios';
const utils=require('../../../backend/src/components/utils')

/*Main and unique*/
function Home() {

  const [enteredNumber,setEnteredNumber] = useState('');
  const [guessNumber,setGuessNumber] = useState('');
  const [errors,setErrors] = useState({});
  


  const handleNumberInput = e => 
  {
    setEnteredNumber(e.target.value);
  }



  
  const handleValidation = () => 
  {

    let errors={};
    let isValid=true;
    let number_regex= new RegExp("^([0-9])*$")

    if(enteredNumber==" ")
    {
      errors.empty='Cannot send empty field';
      isValid=false;

    }else{
        if(!number_regex.test(enteredNumber))
          {
                errors.numeric='The field to send must be numeric';
                isValid=false;

          }
          else if(Number(enteredNumber)>=utils.min && (Number(enteredNumber)<=utils.max))
          {
                  errors.outRange='The number must be between '+utils.min+ ' and '+utils.max;
                  isValid=false;
            
          }
    }

    setErrors(errors)
   
    return isValid
  
  }

  const getNumber= async () =>{

    let isValid=await handleValidation();
    if(isValid){
    
      let requestBody={
        "number":Number(enteredNumber)
      };

        await axios.post('http://localhost:5000/api/guesser/postNumberEntered',requestBody,{headers: 
        {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Credentials':true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "content-type",
          "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS" 

        }}).then(response => 
          {
          setGuessNumber(response.data.comment);

        }).catch(error => 
          {
          console.error('Something went wrong!', error);
          alert('Something was wrong!')

        });

    }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to the Guesser program!
        </h1>

       
      <Form>
        <Form.Field>
          <label>Enter a number to guess </label>
          <input type="password" id="enteredNumber" name="enteredNumber" onChange={handleNumberInput} value={enteredNumber} required/><br/>
          <button className={styles.button} onClick={getNumber}> Guess my number</button>
          <span className={styles.error}>{errors.empty}</span>
          <span className={styles.error}>{errors.numeric}</span>
          <span className={styles.error}>{errors.outRange}</span>
          {guessNumber!==''?<h3>Your number is <span> {guessNumber}</span> </h3>:''}
        </Form.Field>
      </Form>  
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>  Powered by Martín Barreto
          </span>
      </footer>
    </div>
  )
}

export default Home;