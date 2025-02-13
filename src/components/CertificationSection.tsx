import { List, Title, Text } from '@mantine/core';
import { certification } from '../data';
import { IconCertificate } from '@tabler/icons-react';

const CertificationSection = () => {

    return (
        <>
            <Title order={3}>Certifications</Title>
            <List>
                { certification.map((cert, idx)=>{
                    return (
                            <List.Item 
                                key={`${idx}_${cert.title.substring(0, Math.min(5,cert.title.length))}`}
                                icon={
                                      <IconCertificate size="1rem" />
                                  }
                                >
                                {cert.certificateUrl? <><Text fw={500} component='a' href={cert.certificateUrl} target="_blank">{cert.title} ({cert.year})</Text><br/></>:
                                    <Text fw={500}>{cert.title} ({cert.year})</Text>
                                }
                                {cert.instituteUrl? <Text fw={500} c="dimmed" component='a' href={cert.instituteUrl} target="_blank">{cert.institute}</Text>:
                                    <Text c="dimmed">{cert.institute}</Text>
                                }
                            </List.Item>
                        );
                }) }
            </List>
        </>
    );
};

export default CertificationSection;