import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {createPost} from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router';

const renderField = ({input, meta: {touched, error}}) =>
    (<div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            <input type="text" {...input} className="form-control"/>
            <div className="text-help">
                {touched && error && <span>{error}</span>}
            </div>
        </div>);


class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                //blog post has been created
                this.context.router.push('/');
            })
    }

    render () {
        const { handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <label>Title</label>
                <Field name="title" component={renderField} />

                <label>Categories</label>
                <Field name="categories" component={renderField}/>

                <label>Content</label>
                <Field name="content" component={content =>
                    <div className={`form-group ${content.meta.touched && content.meta.error ? 'has-danger': ''}`}>
                        <textarea type="text" {...content.input} className="form-control" />
                        <div className="text-help">
                            {content.meta.touched && content.meta.error && <span>{content.meta.error}</span>}
                        </div>
                    </div>
                }/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories) {
        errors.categories = 'Enter categories';
    }
    if(!values.content) {
        errors.content = "Enter content";
    }
    return errors;
};
export default connect(null, {createPost})(reduxForm({
    form : 'PostsNewForm',
    validate
})(PostsNew));