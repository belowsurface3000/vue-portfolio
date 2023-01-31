<template>
    <nav>
        <div>
            <a href="#top">Top</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills"> Skills</a>
            <a href="#references">References</a>
            <a href="#contact">Contact</a>
        </div>
        <div>
            <p>Navigation</p>
        </div>
    </nav>
</template>


<style lang="scss">
    @import "../styles/reset.scss";
    @import "../styles/variables.scss";
    @import "../styles/mixins.scss";

    // navigation for screens with a width above 1500px
    @media screen and (min-width: 1500px) {
        nav {
            z-index: 3000;
            position: fixed;
            top: 50%;
            left: -250px;
            transform: translateY(-50%);
            transition: all .7s ease;
            width: 285px;
            background-color: rgba(255,255,255,0.2);
            border-radius: 5px;
            box-shadow: $box-shadow-dark;
            @include flexBox;
            justify-content: space-between;

            > div {
                @include flexBox;
                flex-direction: column;
                margin-right: 15px;

                > a {
                    color: $sec-color;
                    margin: 10px 0;
                    border-bottom: solid 2px transparent;
                    
                    &:hover {
                        border-bottom: solid 2px $sec-color;
                    }
                }  
                // "Navigation" text on sidenav
                p {
                    font-size: 1.5rem;
                    left: 200px;
                    position: absolute;
                    transform: rotate(270deg);
                }
            }
            
            &:hover {
                cursor: pointer;
                left: -100px;
                flex-direction: row-reverse;
                background-color:rgba(255, 255, 255, 0.8);
                // "Navigation" text on sidenav
                p {
                    left: 0px;
                }
            }

            &::after {
                content: '';
                position: absolute;
                top: -50px;
                right: -100px;
                bottom: -50px;
                width: 300px;
                z-index: -1;
            }
        }
    }

    // navigation for screens with less than 1500px width
    @media screen and (max-width: 1499px) {
        nav {
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            z-index: 99;
            background: rgba(0, 0, 0, .9);

            > div {
                height: 100%;
                overflow: scroll;
                @include flexBox;
                flex-direction: column;
                justify-content: center;

                > a {
                    color: $prim-color;
                    margin: 25px 0 0;
                    font-size: 3rem;
                    border-bottom: solid 3px transparent;
                }

                > a:hover {
                    border-bottom: solid 3px $prim-color;
                }

                .active {
                    border-bottom: solid 3px $prim-color;
                }
            }
        }

        .navigation-hidden {
            display: none;
        }
    }
</style>