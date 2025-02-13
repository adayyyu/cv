import { useState, useEffect } from 'react';
import { MantineProvider, createTheme, AppShell, virtualColor, colorsTuple } from '@mantine/core';
import { useHotkeys, useWindowEvent } from '@mantine/hooks';
import Profile from './components/Profile';
import AppHeader from './components/AppHeader';
import { PrintContext } from './contexts/print';


const App = () => {
  return (
      <AppShell
      header={{height:60}}
      styles={{
        main: {
          paddingBottom: "var(--mantine-footer-height, 0px)",
          paddingLeft: "var(--mantine-navbar-width, 0px)",
          paddingRight: "var(--mantine-aside-width, 0px)"
        },
      }}
      >
        <AppShell.Header><AppHeader/></AppShell.Header>
        <AppShell.Main><Profile/></AppShell.Main>
    </AppShell>
  );
};

const customTheme = createTheme({
  //white:'#000000', // override white to fix the timeline display in dark mode
  colors:{
    customDarkBlue: colorsTuple('#2D4356'),
    customDarkBlueBg: colorsTuple('#212529'),
    white: virtualColor({
      name: 'white',
      dark: '#000000',
      light: '#ffffff',
    }),
    blue: ['#E7F5FF',
      '#D0EBFF',
      '#A5D8FF',
      '#4DABF7',
      '#4DABF7',
      '#339AF0',
      '#228BE6',
      '#1C7ED6',
      '#1971C2',
      '#1864AB'
  ]
  }
});

export default function Main() {
  const [colorScheme, setColorScheme] = useState<('dark'|'light')>('light');

  const toggleColorScheme = (value?: ('dark'|'light')) => {
    if(value){
      setColorScheme(value);
      localStorage.setItem("mantine-color-scheme", value);
    }else{
      const toggledValue = colorScheme==='dark'?'light':'dark';
      setColorScheme(toggledValue);
      localStorage.setItem("mantine-color-scheme", toggledValue);
    }
  }

  useEffect(()=>{
    // do the theme check in useEffect once,
    // since the mantine built in hooks useColorScheme and useLocalStorage cannot seem to work together
    const theme = localStorage.getItem("mantine-color-scheme");
    if(theme && (theme == 'dark' || theme == 'light')){
      // use the theme in local storage as long as it exist
      toggleColorScheme(theme);
    }else if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // otherwise check on user preference
      toggleColorScheme('dark');
    }
  },[]);

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const [isPrinting, setIsPrinting] = useState(false);
  useWindowEvent('beforeprint', ()=>setIsPrinting(true));
  useWindowEvent('afterprint', ()=>setIsPrinting(false));

  //<MantineProvider theme={colorScheme=='dark'?darkTheme:DEFAULT_THEME}>
  return (
      <MantineProvider theme={customTheme}>
        <PrintContext.Provider value={{isPrinting, setIsPrinting}}>
        <App />
        </PrintContext.Provider>
      </MantineProvider>
  );
}