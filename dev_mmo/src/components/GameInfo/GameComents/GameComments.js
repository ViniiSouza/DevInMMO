import { ErrorMessage, Field, Form, Formik } from "formik"
import { BottomFormContainer, CommentButton, CommentContainer, CommentName, CommentsTitle, CommentText, ErrorMessageContainer, FormContainer, GameCommentsContainer, LikeSection, LikesNumber, TopFormContainer } from "./GameComments.styles"
import * as Yup from 'yup';
import styles from './GameComments.modules.css';
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const KEY_LOCALSTORAGE = 'COMENTARIOS';

export const GameComments = ({ gameId }) => {
    const [comentarioJogo, setComentarioJogo] = useState({});
    const [countLikes, setCountLikes] = useState([])
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
            date: new Date().getTime(),
            ...values,
        };
        const comentariosAtual = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios] : [];
        const novaListaComentarios = [{ id: gameId, comentarios: [...comentariosAtual, comentario] }];
        if (comentariosStorage) {
            const itemsLocalStorage = JSON.parse(comentariosStorage);
            const listaCompletaComentariosSemJogoAtual = itemsLocalStorage.filter((item) => item.id !== gameId);
            localStorage.setItem(
                KEY_LOCALSTORAGE,
                JSON.stringify([...listaCompletaComentariosSemJogoAtual, ...novaListaComentarios])
            );
        } else {
            localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(novaListaComentarios));
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

    const thumbsDown = (id) => {
        var item = countLikes.find(find => find.id === id)
        var comentariosStorage = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
        var comentariosDoJogo = comentarioJogo;
        var comentario = comentariosDoJogo.comentarios.find((item) => item.id === id);
        if (!item) {
            comentario.likes -= 1;
            saveCommentChanges(comentariosStorage, comentariosDoJogo, id)
            if (countLikes.length > 0) {
                setCountLikes([...countLikes, { id: id, like: -1 }])
            }
            else {
                setCountLikes([{ id: id, like: -1 }])
            }
        } else if (item) {
            if (item.like !== -1) {
                comentario.likes -= 1;
                item.like--;
                saveCommentChanges(comentariosStorage, comentariosDoJogo, id)
                if (countLikes.length > 1) {
                    var outrosComentarios = countLikes.find(find => find.id !== id)
                    if (outrosComentarios !== null && outrosComentarios.length > 0) {
                        setCountLikes([...outrosComentarios, { id: id, like: item.like }])
                    } else {
                        setCountLikes([{ id: id, like: item.like }])
                    }
                } else {
                    setCountLikes([{ id: id, like: item.like }])
                }
            }
        }
    };

    const thumbsUp = (id) => {
        var item = countLikes.find(find => find.id === id)
        var comentariosStorage = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
        var comentariosDoJogo = comentarioJogo;
        var comentario = comentariosDoJogo.comentarios.find((item) => item.id === id);
        if (!item) {
            comentario.likes += 1;
            saveCommentChanges(comentariosStorage, comentariosDoJogo, id)
            if (countLikes.length > 0) {
                setCountLikes([...countLikes, { id: id, like: 1 }])
            }
            else {
                setCountLikes([{ id: id, like: 1 }])
            }
        } else if (item) {
            if (item.like !== 1) {
                comentario.likes += 1;
                item.like++
                saveCommentChanges(comentariosStorage, comentariosDoJogo, id)
                if (countLikes.length > 1) {
                    var outrosComentarios = countLikes.find(find => find.id !== id)
                    if (outrosComentarios !== null && outrosComentarios.length > 0) {
                        setCountLikes([...outrosComentarios, { id: id, like: item.like }])
                    } else {
                        setCountLikes([{ id: id, like: item.like }])
                    }
                } else {
                    setCountLikes([{ id: id, like: item.like }])
                }
            }
        }
    };

    const saveCommentChanges = (comentariosStorage, comentariosDoJogo, id) => {
        var comentario = comentariosDoJogo.comentarios.find((item) => item.id === id);
        var outrosJogos = comentariosStorage.filter((item) => item.id !== gameId)
        const outrosComentarios = comentariosDoJogo.comentarios.filter((item) => item.id !== comentario.id);
        comentariosDoJogo = { id: comentariosDoJogo.id, comentarios: [...outrosComentarios, comentario] };
        comentariosDoJogo.comentarios = comentariosDoJogo.comentarios.sort(function (a, b,) {
            return a.date - b.date
        })
        setComentarioJogo(comentariosDoJogo)
        comentariosStorage = [...outrosJogos, comentariosDoJogo];
        localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(comentariosStorage));
    }

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
                            <CommentButton type="submit" disabled={isSubmitting || !isValid}>
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
                        <FaAngleDown onClick={() => thumbsDown(item.id)} style={{ cursor: 'pointer' }}></FaAngleDown>
                        <LikesNumber>{item.likes}</LikesNumber>
                        <FaAngleUp onClick={() => thumbsUp(item.id)} style={{ cursor: 'pointer' }}></FaAngleUp>
                    </LikeSection>
                </CommentContainer>
            ))}
        </GameCommentsContainer>
    )
}