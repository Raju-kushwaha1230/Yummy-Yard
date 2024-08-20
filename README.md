# College Food Ordering System - Yummy Yard 🍔

**Yummy Yard** is a food ordering system designed specifically for college students, providing a convenient way to order meals from campus cafeterias or nearby food outlets. The system ensures quick and easy access to delicious food without leaving your dorm or study spot!

## Features

- **Simple Ordering**: Browse the available menus from on-campus cafeterias or nearby restaurants.
- **Customizable Orders**: Easily add customizations to your orders to meet dietary preferences.
- **Order Tracking**: Get notified when your order is ready for pickup or on its way.
- **Student Authentication**: Log in using your student credentials for personalized orders and discounts.
- **Campus Deals**: Special promotions and discounts for students.
- **Fast Delivery**: Efficient delivery service across the campus area.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (Bootstrap for responsiveness)
- **Backend**: Python (Django or Flask)
- **Database**: SQLite (for simplicity and easy setup)
- **Authentication**: Built-in user authentication with Django/Flask
- **Deployment**: Can be hosted on platforms like Heroku or any campus server.

## Getting Started

### Prerequisites

- Python 3.x installed
- Git installed
- (Optional) Virtual environment for managing dependencies

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/yummy-yard-college.git
2. Navigate to the project directory:
bash
cd yummy-yard-college

3. Set up a virtual environment (optional but recommended):
bash
python -m venv venv

4. source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies:
bash
pip install -r requirements.txt

6. Set up the database:
bash
python manage.py migrate

7. Run the development server:
bash

python manage.py runserver
Open your browser and navigate to http://127.0.0.1:8000/ to start using the application

Usage :
Log in/Register: Students can log in using their student credentials or create a new account.
Browse Menu: Explore available food options from different campus food outlets.
Customize and Order: Add items to your cart, customize as needed, and place your order.
Track Order: Monitor your order status in real-time until it’s ready for pickup or delivery.

### Deployment :
For deployment, consider using free platforms such as Heroku or a campus-based server. To deploy:
1. Ensure all dependencies are listed in requirements.txt.
2. Set up a Procfile if using Heroku for deployment.
3. Configure environment variables for production settings.

### Contributing :
If you'd like to contribute to this project, here's how you can get started:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request.

### License :
This project is licensed under the MIT License - see the LICENSE file for details.
