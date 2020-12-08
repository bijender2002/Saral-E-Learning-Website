import React, { Component } from 'react';
import axios from 'axios';
import './Course.css';
import { Redirect } from 'react-router-dom';

class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            availableCourses: [],
            id: '',
            items: null
        }

    }

    componentDidMount() {

        axios.get('https://saral.navgurukul.org/api/courses')
            .then(res => {
                const availableCourses = res.data.availableCourses;
                this.setState({ availableCourses });
            })

    }

    handleMove(id) {
        console.log(id);
        this.setState({ id: id })

    }
    newFunction(item) {
        console.log(item, "nnnnnnnn");
        this.setState({ items: item })
    }
    handleProps() {
        console.log("working");
    }

    render() {

        const filterItems = this.state.availableCourses.filter(each => { return each.name.includes(this.props.searchProps) })
        console.log(filterItems, "filter");

        const hasValue = this.state.availableCourses.filter((course) => course.name.toLowerCase().includes(this.props.searchProps))
        console.log(this.props, hasValue);

        return (
            <>


                <div className="container">
                    <div className="row">
                        {this.state.availableCourses ?
                            this.props.searchProps ?
                                hasValue.map(data =>
                                    <div className="col-md-4">
                                        <div className="card mb-3 " style={{ maxWidth: '50rem' }}>
                                            <div className="row no-gutters" style={{ cursor: "pointer" }}
                                             onClick={() => this.handleMove(data.id)}>
                                                <div className="col-md-4">
                                                    <img src={data.logo} className="img-fluid" alt="CoursesImage"></img>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{data.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) :
                                this.state.availableCourses.map(data =>
                                    <div className="col-md-4">
                                        <div className="card mb-3 " style={{ maxWidth: '50rem' }}>
                                            <div className="row no-gutters" style={{ cursor: "pointer" }} onClick={() => this.handleMove(data.id)}>
                                                <div className="col-md-4">
                                                    <img src={data.logo} className="img-fluid" alt="CoursesImage"></img>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{data.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            : null
                        }
                    </div>
                </div>

                {this.state.id ? <Redirect to={{
                    pathname: '/course',
                    state: { id: this.state.id }
                }} /> : null}

            </>
        )
    }
}
export default Courses;
