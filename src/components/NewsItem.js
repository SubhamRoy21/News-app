import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card mx-1 my-3" >
            <img src={imgurl} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} target="_blank" class="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
