import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';


export default function body(): JSX.Element {
  return (
    <>
      <h2 className="heading"> Currently Available</h2>
      <div className="body-container">
      <div className="car-container">
        <Image src="./images/honda.jpg" className="images"/>
        <Image src="./images/chevySilverado.jpg" className="images" fluid />
        <Image src="./images/tesla-model-y.jpg" className="images" fluid />
        <Image src="./images/toyotaRav.jpg" className="images" fluid />
        <Image src="./images/gmc.jpg" className="images" fluid />
      </div>
      <div className="content-container">
        <Table striped bordered hover variant="dark" className="info-row1">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Mileage</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Honda</td>
              <td>Civic Sport</td>
              <td>2024</td>
              <td>0</td>
              <td>$26,000</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark" className="info-row">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Mileage</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chevrolet</td>
              <td>Silverado</td>
              <td>2023</td>
              <td>0</td>
              <td>$43,000</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark" className="info-row">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Mileage</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tesla</td>
              <td>Model Y</td>
              <td>2021</td>
              <td>34,050</td>
              <td>$52,000</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark" className="info-row">
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Mileage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Toyota</td>
              <td>Rav4</td>
              <td>2023</td>
              <td>10,000</td>
              <td>$23,800</td>
            </tr>
            </tbody>
          </Table>
          <Table striped bordered hover variant="dark" className="info-row">
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Mileage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GMC</td>
                <td>Sierra 1500 Crew Cab</td>
                <td>2023</td>
                <td>15,354</td>
                <td>$35,000</td>
              </tr>
            </tbody>
          </Table>
      </div>
      </div>
    </>
  )
}
