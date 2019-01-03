import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
    render() {
        return(
            <div>
                <Jumbotron title = "Welcome!" subtitle = "Put something witty here."/>
                <div className = "container mt-4">
                
                    <h2>What we do</h2>
                    <hr />
                    <p> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam expedita necessitatibus optio quidem nemo quisquam dolore doloremque enim nesciunt quasi, nihil eveniet odio quod dicta, vero eos? Harum, corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam nostrum! Minima possimus, quis maiores officiis iusto laudantium minus rerum sunt velit cum dolore! Velit odit aliquam vitae repellat eaque!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laborum velit laudantium cum voluptates repudiandae vel ullam quae distinctio, nesciunt quis eum doloribus accusamus temporibus nihil veniam! Iusto numquam iure ipsum natus. Debitis quis dolorem delectus commodi natus aut recusandae incidunt dignissimos voluptates ea saepe, corrupti accusantium, impedit ratione vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam culpa nam consectetur! Expedita id maxime facere ipsa atque quos, facilis ullam temporibus obcaecati, reiciendis, aliquid aspernatur. Unde ut itaque fuga, rem cupiditate repellat amet error expedita aut similique a maiores excepturi modi placeat vitae ex eos reiciendis laborum explicabo.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed possimus dolores iusto in non quod porro nemo, est asperiores maiores fuga nobis illum repellendus rerum eligendi blanditiis neque laborum mollitia officia recusandae debitis esse! Commodi, nihil. Sunt quae dolorem magni doloribus repudiandae voluptatem corrupti aut ducimus! Dolorum, blanditiis hic?
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Home;