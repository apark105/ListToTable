import React, { Component, Fragment } from 'react';

class ListViewPhotos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: null
        }
    }

    componentDidMount() {
        const { mapRef, placeId } = this.props;

        this.getGooglePhotos(mapRef, placeId);
    }

    getGooglePhotos = (mapRef, placeID) => {
        var service;
        var request = {
            placeId: placeID
        };
        service = new google.maps.places.PlacesService(mapRef);
        service.getDetails(request, (results, status) => {
            
            this.savePhotosFromGoogle(results, status);
        });
    }

    savePhotosFromGoogle = (results, status) => {
        var photosArray = results['photos']
        console.log('Photos in retrieve function', photosArray);

        this.setState({
            photos: [...photosArray]
        });
    }

    displayPhotosFromGoogle() {
        const { photos } = this.state;

        return photos.map((photo, index) => {
            let photoUrl = photo.getUrl();
                                                                                                                                                                                                                                                                                                                                                                                                                              
            return <img src={photoUrl} key={index}/>
        });
    }

    render() {
        const { photos } = this.state;

        if (!photos) {
            return (
                <div>Loading photo data...</div>
            )
        } 
        
        return (
            // const photoResults = photos.map((photo, index) => {
            //     return <img></img>
            // });

            // { photoResults }
            <Fragment>
                { this.displayPhotosFromGoogle() }
            </Fragment>
        )
    }
}

export default ListViewPhotos;
