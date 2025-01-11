import Entry from './components/Entry'
import Trending from './components/Trending'
import Arch from './components/Arch'
import { useState, useEffect } from 'react'
import ReasonsToJoin from './components/ReasonsToJoin'
import FAQ from './components/FAQ'
import Container from './components/Container'
import { themeStore } from "common/Store.js"
import { useStore } from 'zustand'
import { useNavigate } from 'react-router'

const Landing = () => {
  const navigate = useNavigate()
  const { token } = useStore(themeStore)
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    token && navigate("/home")
  }, [token])

  return (
    <div id='landing' className={`w-full relative`}>
      <Entry />
      <Arch />

      <Container>
        <Trending scrollY={scrollY} />
        <ReasonsToJoin />
        <FAQ />
      </Container>
    </div>
  )
}

export default Landing