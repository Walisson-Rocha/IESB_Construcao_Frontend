'use client'

import Pagina from "@/components/Pagina";
import React from "react";
import { Formik } from 'formik'
import { Form, Button } from "react-bootstrap";

export default function page() {
    return (
        <Pagina title='Calculadora IMC-Formic'>
            <div>
                <CardImg src="/"/>
            </div>
            <Formik
                initialValues={{
                    nome: '',
                    genero: '',
                    peso: '0',
                    altura: '0.0'
                }}
                onSubmit={values => console.log(values)}
            >
                {({ values, handleChange, handleSubmit, handleReset }) => (
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type='text'
                                name='nome'
                                value={values.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Gênero</Form.Label>
                            <Form.Select
                                name='genero'
                                value={values.genero}
                                onChange={handleChange}
                            >
                                <option>Selecione</option>
                                <option value="Masculino" > Masculino</option>
                                <option value="Feminino" >Feminino</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Peso:</Form.Label>
                            <Form.Control
                                name="peso"
                                type="number"
                                min={1}
                                value={values.peso}
                                onChange={handleChange}
                            />
                            <Form.Text>Peso em kg. Ex: 80</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Altura:</Form.Label>
                            <Form.Control
                                name="altura"
                                type="number"
                                min={0.01}
                                step={0.01}
                                value={values.altura}
                                onChange={handleChange}
                            />
                            <Form.Text>Altura em metros. Ex: 1,75</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-2' Text-center>
                            <Button 
                            onCLick={handleSubmit}>Enviar</Button>
                            <Button onCLick={handleReset}>Limpar</Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>


        </Pagina>
    )
}
