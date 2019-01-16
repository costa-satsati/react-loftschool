import React from 'react';
import './Show.css';
import { getShowInfo } from 'api';

class Show extends React.Component {
  state = {
    showId: '',
    data: null
  };

  componentDidUpdate() {
    let { showId, data } = this.state;
    const { showId: updatedShowId } = this.props;
    if (updatedShowId !== showId) {
      showId = updatedShowId;
      data = null;
    }
    //update state's data
    if (data == null && showId !== '') {
      getShowInfo(showId).then(data => {
        this.setState({ data });
      });
    }
  }

  render() {
    const { data } = this.state;
    if (data != null) {
      return (
        <div className="show">
          <img alt={data.name} className="show-image" src={data.image.medium} />
          <h2 className="show-label t-show-name">{data.name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {data.genres.toString()}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </div>
      );
    } else {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;
