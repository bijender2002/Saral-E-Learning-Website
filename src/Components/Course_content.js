import Axios from 'axios';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './CourseCt.css';

class Course_content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseData: [],
            exercise: ''
        }

    }

    componentDidMount() {
        console.log(this.props)
        Axios.get(`https://saral.navgurukul.org/api/courses/${this.props.location.state.id}/exercises`)
            .then(res => {
                const courseData = res.data.data;
                this.setState({ courseData: courseData, id: this.props.location.state.id });
                console.log(courseData)
            const newSlug = res.data.data.map(slug=>{return slug.slug})
            console.log(newSlug[0],"ssssssssss");
            })
    }

    handleMove(newSlug) {
        console.log(newSlug);
        Axios.get(`https://saral.navgurukul.org/api/courses/${this.props.location.state.id}/exercise/getBySlug?slug=${newSlug}`)
            .then(res => {
                const Exercises = res.data;
                this.setState({ exercise: Exercises })



            })

    }


    render() {

        const {courseData,exercise} = this.state
        return (
            <>
                <div className='container my-5 text-center'>
                    <div className="card w-75" style={{ maxWidth: '20rem', backgroundColor: 'blue' }}>
                        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fsaral.navgurukul.org%3Fid%3Dauth597958&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fsaral.navgurukul.org&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                            target='_blank' style={{ textDecoration: 'none' }}>
                            <div className="card-body" style={{ cursor: "pointer" }}>
                                <h5 className="card-title" style={{ color: 'white' }}>ENROL IN COURSES</h5>
                            </div>
                        </a>
                    </div>
                    <div className="main_card my-3">
                        {courseData.map(cdata =>
                            <div className="card w-75 bgcolor active" style={{ maxWidth: '20rem', }} >
                                <div className="card-body" style={{ cursor: "pointer" }}
                                    onClick={() => this.handleMove(cdata.slug)}>
                                    <h5 className="card-title">{cdata.name}</h5>
                                </div>
                            </div>
                        )}
                    </div>
                    {exercise.content ?
                        <div class="card w-75 move " style={{ maxWidth: '45rem', }}>
                            <div class="card-body">
                                <h5 class="card-title text-center">
                                    <ReactMarkdown source={this.state.exercise.content} />
                                </h5>
                            </div>
                        </div>

                        : null}
                </div>

            </>
        )
    }
}
export default Course_content;
