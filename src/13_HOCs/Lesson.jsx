// import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import LoadingHOC from './HOC/loadingHOC';
// /*
// const AppLink = (props) => ({
//   render: () => (
//     <Link {...props} activeClassName="active" />
//   )
// })
//
// class Lesson extends Component {
//   render() {
//     return (
//       <Router>
//         <nav>
//           <AppLink to="/">Home</AppLink>
//           <AppLink to="/portfolio">Portfolio</AppLink>
//           <AppLink to="/contacts">Contacts</AppLink>
//         </nav>
//       </Router>
//     );
//   }
// }
// */
//
// class AppComponentUI extends Component {
//   render() {
//     return (
//       <div>{this.props.data.title}</div>
//     );
//   }
// }
//
// const AppComponent = LoadingHOC('data')(AppComponentUI);
//
// class Lesson extends Component {
//   state = {
//     data: {},
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => this.updateState(data))
//   }
//
//   updateState = (data) => {
//     window.setTimeout(() => {
//       this.setState({ data })
//     }, 3000);
//   }
//
//   render() {
//     return (
//       <AppComponent data={this.state.data} />
//     );
//   }
// }
//
// export default Lesson;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MyPortal extends Component {
    el = document.createElement("div");

    componentDidMount() {
        // определяем куда будет монтироваться компонент
        // можно выбрать ясно дело любое место в DOM дереве
        // иногда можно по Id отыскать нужный узел DOM порой это удобнее
        // чем всю вложенность переписывать длинной строчкой не помню можно ли по классу вроде да
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        // на всякий случай подчищаем хвосты компонента
        // зачем? таймеры компонента например и еще подобная логика в этом компоненте
        document.body.removeChild(this.el);
    }

    render() {
        // два аргумента
        // this.props.children - разметка которую будет принимать портал
        // сам портал
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

class Lesson extends Component {

    state = {
        click: 0,
    }

    handleClick = () => {
        this.setState(({ click }) => ({
            click: click + 1,
        }))
    }

    render () {
        return (
            <div onClick={this.handleClick}>
                <span>{this.state.click}</span>
                <span>TEXT</span>
                <MyPortal>
                    <div>
                        TEST PORTAL
                    </div>
                    <button>Meow</button>
                </MyPortal>
            </div>
        );
    }
}

export default Lesson;