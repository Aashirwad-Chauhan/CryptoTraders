import React, { useEffect, useState } from 'react';
import Axios from 'axios'; // Corrected import statement
import { server } from '../index';
import {Container, HStack, VStack, Image, Heading, Text} from '@chakra-ui/react';
import Loader from "./Loader";
import Error from "./Error";


const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await Axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error fetching exchanges:', error);
      }
    };

    fetchExchanges(); // Call fetchExchanges here
  }, []);

  if(error) return <Error message={"Error while recieving Exchange Data!!!"} />

  return (
    <Container
      maxW={"container.xl"}
    >
      {loading ? <Loader /> : <>
        <HStack
          wrap={'wrap'}
          justifyContent={"space-evenly"}
        >
          {
            exchanges.map((i)=>(
              <ExchangeCard 
                key={i.id}
                name={i.name} 
                image={i.image} 
                rank={i.trust_score_rank} 
                url={i.url}  
              />
            ))
          }
        </HStack>
      </>}
    </Container>
  );
};

const ExchangeCard = ({name, image, rank, url}) => (
  <a href={url} target='blank'>
    <VStack 
      w={'52'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      transition={'all 0.4s'}
      m={'4'}
      cursor={'pointer'}
      css={{
        "&:hover":{
          transform: "scale(1.1)",
        },
      }}
    >
      <Image 
        src={image} 
        w={'10'} 
        h={'10'} 
        objectFit={'contain'} 
        alt={'Exchange'} 
      />

      <Heading
        size={'md'}
        noOfLines={1}
        marginTop={'2'}
      > 
        {name} 
      </Heading>

      <Text as='samp' 
        fontSize={'sm'} 
        color={'gray.600'} 
        textAlign={'center'} 
        fontFamily={'Impact, fantasy'}>
          {rank}
      </Text>


    </VStack>
  </a>
);

// const ExchangeCard = ({ name, image, rank, url }) => (
//   <Link href={url} target='_blank' _hover={{ textDecoration: 'none' }}>
//     <VStack
//       w={'52'}
//       shadow={'lg'}
//       p={'4'}
//       borderRadius={'lg'}
//       transition={'all 0.4s'}
//       m={'4'}
//       cursor={'pointer'}
//       _hover={{ transform: 'scale(1.1)' }}
//     >
//       <Image src={image} w={'52px'} h={'52px'} objectFit={'contain'} alt={name} />

//       <Heading size={'md'} noOfLines={1} textAlign={'center'}>
//          {name}
//       </Heading>

//       <Text fontSize={'sm'} color={'gray.600'} textAlign={'center'}>
//         Rank: {rank}
//       </Text>
//     </VStack>
//   </Link>
// );

export default Exchanges;
