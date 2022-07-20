/* eslint-disable no-unused-vars */
import {Header, Form, Button, Input} from './Searchbar.styled';
import {FcSearch} from 'react-icons/fc';

export function Searchbar() {
    return (
        <Header>
            <Form>
                <Input         
                type="text"
                placeholder="Search weather by city"
                />

                <Button type="submit">
                <FcSearch/>
                </Button>
            </Form>
        </Header>
    )
}