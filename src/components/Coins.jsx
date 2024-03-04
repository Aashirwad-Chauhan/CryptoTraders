import React, { useEffect, useState } from 'react';
import Axios from 'axios'; // Corrected import statement
import { server } from '../index';
import {Container, HStack, VStack, Image, Heading, Text, Button, RadioGroup, Radio} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import Error from "./Error";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  
  const currencySymbol = currency==="inr" ? "₹" : currency==="eur" ? "€" : "$";

  const changePage = (page) =>{
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(130).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await Axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error fetching exchanges:', error);
      }
    };

    fetchCoins(); // Call fetchExchanges here
  }, [currency, page]);

  if(error) return <Error message={"Error while fetching Coin Data!!!"} />

  return (
    <Container
      maxW={"container.xl"}
    >
      {loading ? <Loader /> : <>

        <RadioGroup
          value={currency}
          onChange={setCurrency}
          p={'8'}
        >
          <HStack
            spacing={'4'}
          >
            <Radio value={"inr"} > INR(₹) </Radio>
            <Radio value={"eur"} > EUR(€) </Radio>
            <Radio value={"usd"} > DLR($) </Radio>
          </HStack>
        </RadioGroup>

        <HStack
          wrap={'wrap'}
          justifyContent={"space-evenly"}
        >
          {
            coins.map((i)=>(
              <CoinCard 
                id={i.id}
                key={i.id}
                name={i.name} 
                image={i.image} 
                price={i.current_price}
                symbol={i.symbol} 
                currencySymbol={currencySymbol}  
              />
            ))
          }
        </HStack>

        <HStack
          w={'full'}
          overflowX={'auto'}
          p={'8'}
        >
          {btns.map((i, ind) => (
            <Button
              key={ind}
              bgColor={"blackAlpha.900"}
              color={'white'}
              onClick={()=>changePage(ind + 1)}
            >
            {ind + 1}
          </Button>  
          ))}
        </HStack>    

      </>
      }
    </Container>
  );
};

const CoinCard = ({id, name, image, symbol, price, currencySymbol="₹"}) => (
  <Link to={`/coin/${id}`}>
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
        {symbol} 
      </Heading>

      <Text as='samp' 
        fontSize={'sm'} 
        color={'gray.600'} 
        textAlign={'center'} 
        fontFamily={'Impact, fantasy'}>
          {name}
      </Text>
      
      <Text 
        noOfLines={1}
      >  
          {price ? `${currencySymbol} ${price}` : "NA"}
      </Text>

    </VStack>
  </Link>
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

export default Coins;
