import React, { useState } from "react";

import { 
    Container,
    Header,
    Title,
    Category, 
    Icon, 
    Name,
    Separator,
    Footer,

} from "./styles";
import { FlatList } from "react-native";
import { categories } from "../../utils/categories";
import { Button } from '../../components/Forms/Button';

interface Category {
    key: string;
    name: string
}

export interface Props {
    category: Category;
    SetCategory: (category: Category) => void;
    closeSelectCategory: () => void
}

export function CategorySelect({
    category,
    SetCategory,
    closeSelectCategory
}: Props ){
    function handleCategorySelect(category: Category){
        SetCategory(category);
    }
    return(
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                <Category
                    onPress={() => handleCategorySelect(item)}
                    isActive={category.key === item.key}
                > 
                    <Icon name={item.icon} />
                    <Name>{item.name}</Name>
                </Category>
                )}
                ItemSeparatorComponent={Separator}
            />

            <Footer>
                <Button title='Selecionar' onPress={closeSelectCategory}/>
            </Footer>
        </Container>
    )
}
