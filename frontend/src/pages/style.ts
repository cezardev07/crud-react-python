import { styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    position: relative;
`

export const Wrapper = styled.section`
    max-width: 650px;
    padding-top: 64px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
    
    form.heading{
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        textarea{
            width: 100%;
            outline: none;
            background: transparent;
            color: #ddd;
            font-size: 20px;
            border: none;
            ::placeholder{
                color: #fff;
            }
        }
        button{
            width: 174px;
            height: 41px;
            border-radius: 4px;
            background: var(--gradientes-gradiente-normal, linear-gradient(90deg, #8323FF 0%, #FF2DAF 100%));
            padding: 8px 16px;
            border: medium none;
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            gap: 8px;
            outline: none;
            font-size: 18px;
            text-transform: capitalize;
        }
        button:hover{
            background: var(--gradientes-gradiente-normal, linear-gradient(90deg,  #FF2DAF 0%,#8323FF 100%));
        }
    }
    hr{
        background-image: var(--color-gradient);
        height: 6px;
        border: none;
    }

    .tasks{
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;

        .task{
            width: 100%;
            background: #2b2b37;

            display: flex;
            justify-content: space-between;
            padding: 20px;
            gap: 10px;

            transition: all .3s ease;

            p::selection{
                background: #fb8616;
            }
            .buttons-wrapper{
                display: flex;
                gap: 5px;
                align-items: flex-start;
                button{
                    padding: 10px 20px;
                    cursor: pointer;
                    border: none;
                    border-radius: 4px;
                    font-size: 15px;
                    text-transform: capitalize;
                }
                button.btn-editar{
                    background: royalblue;
                    color: #ffff;
                }
                button.btn-apagar{
                    background: #FF2DAF;
                    color: #fff;
                }
                button:active{
                    scale: .9;
                }
                button:hover{
                    filter: brightness(90%);
                }
            }
        }
        .task:hover{
            background: rgba(139, 141, 155, 0.15);
            box-shadow: rgba(139, 141, 155, 0.506) 0px 0px 10px 1px;
        }
    }


    .pop-up{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #979eb033;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .wrapper-pop-up{
            padding: 30px;
            width: 600px;
            background: #ffffff;
            color: #000;

            display: flex;
            flex-direction: column;
            gap: 50px;
            border-radius: 4px;

            .heading-pop-up{
                font-size: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            form{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                gap: 40px;

                textarea{
                    width: 100%;
                    padding: 10px 0;
                    padding-left: 40px;
                    font-size: 20px;
                    border-radius: 4px;
                    border: solid 1px #000;
                    outline: none;
                }
                textarea:focus{
                    box-shadow: 0px 0px 10px 1px #25aaee;
                }
                button{
                    width: 220px;
                    background: #25aaee;
                    padding: 10px 20px;
                    font-size: 20px;
                    border: none;
                    color: #ffffff;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover{
                    filter: brightness(90%);
                }
                button:active{
                    scale: .9;
                }
            }
        }
    }
`