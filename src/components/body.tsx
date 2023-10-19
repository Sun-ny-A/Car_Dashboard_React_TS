import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Carousel from 'react-bootstrap/Carousel';



export default function Body(): JSX.Element {
  const ratings = [
    {
      carName: 'honda',
      consumerRating: 4,
      safetyRating: 5,
    },
    {
      carName: 'chevy',
      consumerRating: 3,
      safetyRating: 3,
    },
    {
      carName: 'tesla',
      consumerRating: 5,
      safetyRating: 3,
    },
    {
      carName: 'toyota',
      consumerRating: 3,
      safetyRating: 4,
    },
    {
      carName: 'gmc',
      consumerRating: 4,
      safetyRating: 4,
    },
  ]


  return (
    <>
      <h2 className="heading"> Currently Available</h2>
      <div className="body-container">
        <div className="car-container">
          <Image src="./images/honda.jpg" className="images" />
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
            <div>
              <br />
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Typography className="name-ratings" component="legend">Consumer Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="consumer-rating"
                  value={ratings[0].consumerRating}
                  readOnly
                /><br />
                <Typography className="name-ratings" component="legend">Safety Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="safety-rating"
                  value={ratings[0].safetyRating}
                  readOnly
                />
              </Box>
            </div>
          </Table>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="First slide" />
                <Carousel.Caption >
                  <h3 className="review-text">Absolutely love the car!</h3>
                  <p className="review-text"> I have been driving it for about a month now, and absolutely love the car.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Second slide" />
                <Carousel.Caption style={{ color: 'black' }}>
                  <h3>Very poor exterior paint quality</h3>
                  <p>Very poor quality control on the paint jobs. I have a black 2023 and the paint looks horrible with a dull look and lots of orange peel..</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Third slide" />
                <Carousel.Caption>
                  <h3>Good price and gas</h3>
                  <p>
                    First, let me say I purchased this car for gas savings and it was one of the few cars on the market that were not price gouging!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
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
            <div>
              <br />
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Typography className="name-ratings" component="legend">Consumer Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="consumer-rating"
                  value={ratings[1].consumerRating}
                  readOnly
                /><br />
                <Typography className="name-ratings" component="legend">Safety Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="safety-rating"
                  value={ratings[1].safetyRating}
                  readOnly
                />
              </Box>
            </div>
          </Table>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="First slide" />
                <Carousel.Caption >
                  <h3>Do not buy!</h3>
                  <p className="review-text"> Less than a month of owning it, one day it decided not to start and the battery was completely dead. I received an e-mail from OnStar saying there was an airbag issue and to contact the dealer within 1 day.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Second slide" />
                <Carousel.Caption>
                  <h3>Good car</h3>
                  <p>No issues at all.  FYI GM has deleted the AFM feature on the 2022's due to premature lifter wear.  I guess they finally wised up.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Third slide" />
                <Carousel.Caption>
                  <h3>Great Truck</h3>
                  <p>
                    Went from a Tacoma (love this truck still) back to a full size truck.  The Silverado with the 3.0L Duramax diesel engine is awesome!!!  Especially the 23 models with the interior refresh.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
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
            <div>
              <br />
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Typography className="name-ratings" component="legend">Consumer Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="consumer-rating"
                  value={ratings[2].consumerRating}
                  readOnly
                /><br />
                <Typography className="name-ratings" component="legend">Safety Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="safety-rating"
                  value={ratings[2].safetyRating}
                  readOnly
                />
              </Box>
            </div>
          </Table>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="First slide" />
                <Carousel.Caption >
                  <h3>Best car we have every owned</h3>
                  <p className="review-text"> We had 1 problem with door sticking which was fixed at our house by technician that came to our house. We love the acceleration, very comfortable seats and convenience of charging at home.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Second slide" />
                <Carousel.Caption>
                  <h3>Excellent, but miss Android</h3>
                  <p>The winter road conditions may be challenging... But so far, so good. The only complaint I would make at this stage is the choice of not providing an Android-based system through the big screen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Third slide" />
                <Carousel.Caption>
                  <h3>"Worst in Class" customer service</h3>
                  <p>
                    Tesla buyers, beware...try calling Tesla and asking a question. The hold time is infinity+4 hours. Also, I paid cash for my Model Y and Tesla received the title from NJ DMV more than a month ago, and they will not send it to me (they said they are too busy and told me to wait another 3 months then follow-up...this is MY CAR not theirs)!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
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
            <div>
              <br />
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Typography className="name-ratings" component="legend">Consumer Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="consumer-rating"
                  value={ratings[3].consumerRating}
                  readOnly
                /><br />
                <Typography className="name-ratings" component="legend">Safety Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="safety-rating"
                  value={ratings[3].safetyRating}
                  readOnly
                />
              </Box>
            </div>
          </Table>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="First slide" />
                <Carousel.Caption >
                  <h3>Much better than a 2019</h3>
                  <p className="review-text"> The 2019 had the automatic engine shut off/turn on when the car stopped at an intersection.   This drove me f*&#@ing crazy.  Apparently so we could save gas. The new 2023 does not have that ridiculous feature.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Second slide" />
                <Carousel.Caption>
                  <h3>The best</h3>
                  <p>The Rav4 is perfect inside has a good fill, driving it very easy and solid has plenty of power and I am getting 40 mpg. I paid more than I wanted too because of the sign of time's.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Third slide" />
                <Carousel.Caption>
                  <h3>Battery keeps dying</h3>
                  <p>
                    Battery dies after 2 days of not driving. Dealer said it's because I don't drive enough. He said to take it out on the highway once a week for 20 miles. Kind of defeats gas mileage, I also hate the auto start stop at stop signs and red lights.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
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
            <div>
              <br />
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Typography className="name-ratings" component="legend">Consumer Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="consumer-rating"
                  value={ratings[4].consumerRating}
                  readOnly
                /><br />
                <Typography className="name-ratings" component="legend">Safety Rating</Typography>
                <br />
                <Rating className="star-ratings"
                  name="safety-rating"
                  value={ratings[4].safetyRating}
                  readOnly
                />
              </Box>
            </div>
          </Table>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="First slide" />
                <Carousel.Caption >
                  <h3>Great truck</h3>
                  <p className="review-text">Truck is a joy to drive and currently getting 23 mpg around town. Only changes made were to add running boards and an AutoStop eliminator</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Second slide" />
                <Carousel.Caption>
                  <h3>The only truck I like</h3>
                  <p>I just recently bought a 2023 GMC Sierra. I have driven GM vehicles all of my life and this is actually the third new truck I've bought since 2018 and several before that.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="Third slide" />
                <Carousel.Caption>
                  <h3>Awesome</h3>
                  <p>
                    This is my 4th GMC Sierra 1500 Denali. I really like this truck, but GMC did a fantastic job on this Ultimate model of the Denali. Keep up the good work GMC.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div >
    </>
  )
}