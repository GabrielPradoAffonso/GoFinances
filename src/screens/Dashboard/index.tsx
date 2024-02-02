import React from "react";

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
} from './styles';

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

const data: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,000",
        category: {
            name: "Vendas", 
            icon: "dollar-sign"
        },
        date: "13/01/2024",
    },
    {   
        id: '2',
        type: 'negative',
        title: "Hamburgueria Pizzy",
        amount: "R$ 59,00",
        category: {
            name: "Alimentação", 
            icon: "coffee"
        },
        date: "12/01/2024",
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do Apartamento",
        amount: "R$ 1.200,00",
        category: {
            name: "Casa", 
            icon: "home"
        },
        date: "10/01/2024",
    },
];

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper> 
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/132711512?v=4' }}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Gabriel</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="última entrada dia 27 de Janeiro"
                    type="up"
                />

                <HighlightCard 
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="última saída dia 29 de Janeiro"
                    type="down"
                />

                <HighlightCard 
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 29 de Janeiro"
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                    keyExtractor={item => item.id}
                />
                
            </Transactions>
        </Container>
    );
}
