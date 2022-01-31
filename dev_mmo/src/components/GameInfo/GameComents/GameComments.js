import { ErrorMessage, Field, Form, Formik } from "formik"
import { BottomFormContainer, CommentButton, CommentContainer, CommentName, CommentsTitle, CommentText, ErrorMessageContainer, FormContainer, GameCommentsContainer, LikeSection, LikesNumber, TopFormContainer } from "./GameComments.styles"
import * as Yup from 'yup';
import styles from './GameComments.modules.css';
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const KEY_LOCALSTORAGE = 'COMENTARIOS';

export const GameComments = ({ gameId }) => {
    const [comentarioJogo, setComentarioJogo] = useState({});
    const initialValues = {
        nome: '',
        email: '',
        comentario: '',
    };

    const errorStyles = {
        color: 'red',
        position: 'absolute',
        left: '28.5vw'
    };

    const handleSubmit = (values, { setSubmitting }) => {
        const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
        const comentario = {
            id: Math.random().toString(16).slice(2),
            likes: 0,
            ...values,
        };

        const comentariosAtual = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios] : [];
        const novaListaComentarios = [{ id: gameId, comentarios: [...comentariosAtual, comentario] }];

        if (comentariosStorage) {
            const itemsLocalStorage = JSON.parse(comentariosStorage);
            const listaCompletaComentariosSemJogoAtual = itemsLocalStorage.filter((item) => item.id !== gameId);

            localStorage.setItem(
                'COMENTARIOS',
                JSON.stringify([...listaCompletaComentariosSemJogoAtual, ...novaListaComentarios])
            );
        } else {
            localStorage.setItem('COMENTARIOS', JSON.stringify(novaListaComentarios));
        }

        setComentarioJogo(...novaListaComentarios);
        setSubmitting(false);
    };

    useEffect(() => {
        const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
        if (comentariosStorage) {
            const items = JSON.parse(comentariosStorage);
            const filter = items.find((item) => item.id === gameId);
            setComentarioJogo(filter);
            console.log(comentarioJogo)
        }
    }, [gameId]);

    const schema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório').min(4, 'Nome precisa ter mais de 3 caracteres'),
        email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
        comentario: Yup.string().required('Campo obrigatório').min(6, 'Comentário precisa ter mais de 5 caracteres').max(100, 'Comentário não pode ter mais de 100 caracteres')
    })

    return (
        <GameCommentsContainer>
            <CommentsTitle>Comentários</CommentsTitle>
            <FormContainer>

                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                    {({ isSubmitting, isValid }) => (
                        <Form>
                            <TopFormContainer>
                                <Field className="name-field" name="nome" placeholder="Nome" />
                                <Field className="email-field" name="email" placeholder="E-mail" />
                                <ErrorMessageContainer>
                                    <ErrorMessage name="nome" style={errorStyles} component="span" />
                                    <ErrorMessage name="email" style={{ ...errorStyles, left: '50.5vw' }} component="span" />
                                </ErrorMessageContainer>
                            </TopFormContainer>
                            <BottomFormContainer>
                                <Field as="textarea" className="comment-field" name="comentario" placeholder="Comentário" />
                                <ErrorMessageContainer>
                                    <ErrorMessage name="comentario" style={errorStyles} component="span" />
                                </ErrorMessageContainer>
                            </BottomFormContainer>
                            <CommentButton onClick={() => console.log(comentarioJogo)} type="submit" disabled={isSubmitting || !isValid}>
                                Enviar
                            </CommentButton>
                        </Form>
                    )}
                </Formik>
            </FormContainer>
            {comentarioJogo?.comentarios?.map((item) => (
                <CommentContainer key={item.id}>
                    <CommentName>{item.nome} ({item.email})</CommentName>
                    <CommentText>{item.comentario}</CommentText>
                    <LikeSection>
                        <FaAngleDown style={{ cursor: 'pointer' }}></FaAngleDown>
                        <LikesNumber>{item.likes}</LikesNumber>
                        <FaAngleUp style={{ cursor: 'pointer' }}></FaAngleUp>
                    </LikeSection>
                </CommentContainer>
            ))}
        </GameCommentsContainer>
    )
}