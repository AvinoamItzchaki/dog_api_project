import './App.css';
import Expenses from './components/Expenses';
import { useEffect, useState } from 'react';

function App() {

  const [dogsImages , setDogsImages] = useState([])

  useEffect (() => {

    const fetchDogsImages = async () => {

      try{
        const response = await fetch ("https://dog.ceo/api/breeds/image/random/50")
        const data = await response.json()

        const formatDogImages = data.message.map ( dogImage => ({
          dogImage: dogImage,
          dogImageLink: dogImage.toString()
        }))
        setDogsImages ( formatDogImages)
      }catch (error){
        console.log(error)
      }
    }
    fetchDogsImages()

  },[]);

  return (
      <div className="App">
        <h1>ברוך הבא לרשימת כלבים</h1>
        <p>
          Hello Efi, there is the rest API list As you requested.
        </p>
        <br/>
        <p>
          The list contains the dog's picture, its name, and the date. Since the site from which I took the data does not require email registration as you recommended us take from such a site for the task, the order of the data there is less sophisticated.
          Therefore, the picture is original from the json URL. The dog's name was cut the image link String. Because there was no date component in the JSON, I built a function that generates random dates from 2004 to 2023 to fill in the gap. It turns out that a small part of the pictures has a date written on them, but again, the date does not appear as an object in the json. Enjoy your stroll, Avinoam Itzchaki.
        </p>
        <Expenses items={dogsImages}/>
      </div>
  );
}
export default App;
