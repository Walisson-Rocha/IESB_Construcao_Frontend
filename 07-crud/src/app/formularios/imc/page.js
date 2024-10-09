'use client'
import Pagina from '@/components/Pagina';
import React, { useState } from 'react';
import { Form, Button, CardImg, Modal } from 'react-bootstrap';
import { ImEvil2 } from "react-icons/im";


export default function imcpage() {

    const [showModal, setShowModal] = useState(false)
    const [nome, SetNome] = useState('')
    const [genero, SetGenero] = useState('')
    const [peso, SetPeso] = useState(0)
    const [altura, SetAltura] = useState('0.0')

    const [imc, setImc] = useState(0)
    const [classificacao, setclassificacao] = useState('')

    function Calcular(event) {
        event.preventdefalt()

        const pesoNumerico = Number(peso)
        const alturaNumerico = Number(altura)

        const resultadoIMC = (pesoNumerico / (alturaNumerico * alturaNumerico)).toFixed(1)
        console.log('Resultado IMC =>', resultadoIMC)
        ServerInsertedHTMLContext(resultadoIMC)

        setImc(resultadoIMC)

        if (imc < 18.5) {
            setclassificacao('Abaixo do peso')
        } else if (imc >= 18.5 && imc < 24.9) {
            setclassificacao('Abaixo do peso')
        } else if (imc >= 25.9 && imc < 29.9) {
            setclassificacao('Abaixo do peso')
        } else if (imc >= 30 && imc < 34.9) {
            setclassificacao('Abaixo do peso')
        } else if (imc >= 35) {
            setclassificacao('Abaixo do peso')
        }

        console.log({ imc, classificacao })

        setShowModal(true)
    }

    return (
        <Pagina titulo="Calculadora IMC">

            <div>
                <CardImg src="/image.png" />
            </div>

            {/*formulario */}

            <Form onSubmit={Calcular}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        Type="test"
                        name="nome"
                        value={nome}
                        onChange={e => { SetNome(e.target.value) }}
                    />
                </Form.Group>
            </Form>
            <Form.Group>
                <Form.Label>Gênero</Form.Label>
                <Form.Select
                    nome="genero"
                    value={genero}
                    onChange={e => { SetGenero(e.target.value) }}
                >
                    <option>Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Altura</Form.Label>
                <Form.Control type="number"
                    value={altura}
                    onChange={e => { SetAltura(e.target.value) }}
                    min={0.01}
                    step={0.01}
                />
            </Form.Group>

            <Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Peso</Form.Label>
                    <Form.Control
                        name="peso"
                        type='number'
                        value={peso}
                        onChange={e => { SetPeso(e.target.value) }}
                        min={0.01}
                        step={0.01} />
                    <Form.Text>Altura em Metro. Ex: 1,75</Form.Text>
                </Form.Group>
            </Form.Group>

            <Form.Group className='mb-3 text-center'>
                <Button type="Subimit" variant="success"><ImEvil2 /> Calcular</Button>
            </Form.Group>

            {/* modal*/}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>O seu IMC é {imc}</p>
                    <p> Sua classificação!{classificacao}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClink={() => setShowModal(false)} >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Pagina>

    )
}
