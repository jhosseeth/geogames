import { useState, useEffect } from 'react'
import { Country, Countries } from './country'

export default function FlagsGame() {
  const [data, setData] = useState<Array<Countries>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState<Country | null>(null)
  const [started, setStarted] = useState<boolean>(false)
  const [showNext, setShowNext] = useState<boolean>(false)
  const [showCountry, setShowCountry] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')

  // use react query
  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations');
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      const countries: Countries[]= await response.json();
      setData(countries);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);

  const selectCountry = () => {
    const randomIndex = getRandomInt(data.length)
    const randomCountry: Country = {
      flag: data[randomIndex].flags.png,
      name: {
        common: data[randomIndex].name.common,
        official: data[randomIndex].name.official
      },
      translations: data[randomIndex].translations
    }

    console.log('randomCountry: ', randomCountry)

    setCountry(randomCountry)
  }

  const startGame = () => {
    selectCountry()
    setStarted(true)
  }

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => setInputText(event.currentTarget.value.toLowerCase())

  const checkHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const commonName = country?.name.common.toLowerCase()
    const esCommonName = country?.translations.spa.common.toLowerCase()

    // buscar con Regex
    if (inputText?.includes(commonName as string) || inputText?.includes(esCommonName as string)) console.log('SI la incluye')
    else console.log('NO la incluye')
  }

  const showCountryHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setShowCountry(true)
    setShowNext(true)
  }

  const nextFlag = () => {
    setShowNext(false)
    setShowCountry(false)
    selectCountry()
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Flags Game</h1>

      {!started && <button onClick={startGame}>Start</button>}
      {started && country && (
        <>
          <img src={country?.flag} alt={`Flag`} />
          <p>{showCountry ? country.name.official : ''}</p>
          {showNext
            ? <button onClick={nextFlag}>Next</button>
            : <form>
                <input type="text" name="country" onChange={onChangeHandler}/>
                <button onClick={checkHandler}>Check</button>
                <button onClick={showCountryHandler}>I don't know</button>
              </form>
          }
        </>
      )}
    </>
  );
}
