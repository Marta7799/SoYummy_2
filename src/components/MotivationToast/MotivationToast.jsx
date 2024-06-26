import React, { useState, useEffect } from 'react';
import MotivationCard from 'components/ReusableComponents/MotivationCard/';
import { Container } from './MotivationToast.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { changeUserInfo } from '../../redux/auth/operations';

const MotivationToast = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const { newUser, favoriteRecipes, addedRecipes, daysInApp } =
    useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (newUser) {
      setVisible(true);
      setMessage(`Hello and welcome, dear friend!`);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(
          changeUserInfo({
            newUser: false,
          })
        );
      }, 10000);

      return () => clearTimeout(timer);
    }

    if (
      favoriteRecipes &&
      !favoriteRecipes.isInformed &&
      favoriteRecipes.number === 5
    ) {
      setMessage('You have added 5 recipes to your favorites!');
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(
          changeUserInfo({
            favoriteRecipes: true,
          })
        );
      }, 10000);

      return () => clearTimeout(timer);
    }

    if (addedRecipes && !addedRecipes.isInformed && addedRecipes.number === 1) {
      setMessage('You have create the first recipe!');
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(
          changeUserInfo({
            addedRecipes: true,
          })
        );
      }, 10000);

      return () => clearTimeout(timer);
    }

    if (daysInApp && !daysInApp.isInformed && daysInApp.number === 30) {
      setMessage('You have been using the application for 30 days!');
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(
          changeUserInfo({
            daysInApp: true,
          })
        );
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [newUser, favoriteRecipes, addedRecipes, daysInApp, dispatch]);

  const onCloseHandler = () => {
    setVisible(false);
    if (newUser) {
      dispatch(
        changeUserInfo({
          newUser: false,
        })
      );
    }
    if (favoriteRecipes.number === 5) {
      dispatch(
        changeUserInfo({
          favoriteRecipes: true,
        })
      );
    }
    if (addedRecipes.number === 1) {
      dispatch(
        changeUserInfo({
          addedRecipes: true,
        })
      );
    }
    if (daysInApp.number === 30) {
      dispatch(
        changeUserInfo({
          daysInApp: true,
        })
      );
    }
  };

  return (
    visible && (
      <Container>
        <MotivationCard text={message} onCloseHandler={onCloseHandler} />
      </Container>
    )
  );
};

export default MotivationToast;
