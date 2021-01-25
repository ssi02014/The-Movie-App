import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../actions/user_action';
import { withRouter } from 'react-router-dom';

export default function(SpecificComponent, option, adminRoute = null) {
    
    //option
    //null => 아무나 출입 가능한 페이지
    //true => 로그인한 유저만 출입 가능한 페이지
    //false => 로그인한 유저는 출입 불가능한 페이지
    //adminRoute 파라미터는 admin만 출입가능하게하려면 true를 넣으면됨

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

         useEffect(() => {
            dispatch(auth())
            .then(response => {
                console.log(response);

                //로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                } else {
                    //로그인한 상태
                    if (adminRoute && !response.payload.isAdmin ) {
                        props.history.push('/');
                    } else {
                        if(!option) {
                            props.history.push('/');
                        }
                    }
                }
            })
         }, []);

         return (
             <SpecificComponent></SpecificComponent>
         )
    }

    return withRouter(AuthenticationCheck);
}