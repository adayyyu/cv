import { Title, Text, Center, Avatar, HoverCard, Flex, Box, Stack, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconMapPin, IconEPassport } from '@tabler/icons-react';
import { basicInfo } from '../data';
import { usePrintContext } from '../contexts/print';

const AvatarSection = () => {
    return (
        <HoverCard width={280} shadow="md" withArrow>
        <HoverCard.Target>
            <Avatar size={150} radius={150} src="https://cataas.com/cat?width=150&height=150"/>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Random Cat Images from <Text component='a' href="https://cataas.com/" target="_blank">Cat as a service</Text>.
          </Text>
        </HoverCard.Dropdown>
        </HoverCard>
    );
};

const BasicInfoText = () => {
    return (
        <Stack gap="0">
        <Title mb={15}>{basicInfo.name}</Title>
        <Box><Center inline><IconMail/><Text ml={5} fw={500} component="a" href={`mailto:${basicInfo.email}`}>{basicInfo.email}</Text></Center></Box>
        { basicInfo.github && <Box><Center inline><IconBrandGithub/><Text ml={5} fw={500} component="a" href={`https://github.com/${basicInfo.github}`} target="_blank">{basicInfo.github}</Text></Center></Box> }
        { basicInfo.linkedin && <Box><Center inline><IconBrandLinkedin/><Text ml={5} fw={500} component="a" href={`https://www.linkedin.com/in/${basicInfo.linkedin}`} target="_blank">{basicInfo.linkedin}</Text></Center></Box> }
        { basicInfo.location && <Box><Center inline><IconMapPin/><Text ml={5} fw={500} component='a' href={`https://www.google.com/maps/search/${basicInfo.location}`} target='_blank'>{basicInfo.location}</Text></Center></Box>}
        <Box><Center inline><IconEPassport/><Text ml={5}>{basicInfo.visaForUK?"Visa Required to work in UK":"Visa NOT Required to work in UK"}</Text></Center></Box>
        </Stack>
    );
}

const BasicInfoSection = () => {
    const {isPrinting} = usePrintContext();
    const theme = useMantineTheme();
    const {colorScheme} = useMantineColorScheme();
    return (
        <Box miw='xs' style={{ backgroundColor: colorScheme==='dark'?theme.colors.customDarkBlue[0]:theme.colors.blue[4] }}>
        <Box m="md"><Flex gap={50}>
            <Box display={isPrinting?'none':'block'}><AvatarSection/></Box>
            <Box><BasicInfoText/></Box>
        </Flex></Box></Box>
    );
};

export default BasicInfoSection;