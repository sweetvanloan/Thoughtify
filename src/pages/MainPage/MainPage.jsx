import React from 'react';
import FireHose from '../../components/FireHose/FireHose';
import Posts from '../../components/Posts/Posts'
import NavBar from '../../components/NavBar/NavBar'


function MainPage () {
    return <>
    <NavBar />
    <Posts />
    <FireHose />
    </>
}

export default MainPage