import { useCallback } from 'react';
import { IconSun, IconMoonStars, IconPrinter } from '@tabler/icons-react';
import { Group, ActionIcon, useMantineColorScheme, useMantineTheme, Text, Center } from '@mantine/core';
import { usePrintContext } from '../contexts/print';

const AppHeader = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const { setIsPrinting } = usePrintContext();

    const onPrintButtonClick = useCallback(()=>{
      if(typeof setIsPrinting === 'function'){
        setIsPrinting(true);
      }
      const timeout = setTimeout(()=>{
        window.print();
        if(typeof setIsPrinting === 'function'){
          setIsPrinting(false);
        }
      },100);

      return () => {
        clearTimeout(timeout);
      };
    },[setIsPrinting]);

    return (<Group style={{ height: '100%' }} justify="space-between" px={20}>
            <Text fw={700}>CV - Ada Yu</Text>
            <Center>
            <ActionIcon aria-label="print" variant="default" onClick={onPrintButtonClick} size={30}>
              <IconPrinter color={colorScheme === 'dark' ?theme.colors.gray[0]:'black'} size="1.25rem" />
            </ActionIcon>
            <ActionIcon ml='xs' aria-label="change-theme" variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun color={theme.colors.gray[0]} size="1.25rem" /> : <IconMoonStars size="1.25rem" />}
            </ActionIcon></Center>
          </Group>);
}

export default AppHeader;