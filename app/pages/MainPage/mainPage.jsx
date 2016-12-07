import React from 'react'
import { Link } from 'react-router'
import MapView from './../../component/MapView/mapView.jsx'
import HotspotForm from './../../component/Hotspot/hotspotForm.jsx'
import HotspotList from './../../component/Hotspot/hotspotList.jsx'

export default class MainPage extends React.Component {

  render () {
    return (
      <div>
        <MapView />
      </div>
    )
  }
}
