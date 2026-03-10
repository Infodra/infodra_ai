# MongoDB Setup Instructions

## Contact Form Configuration

The contact form is now connected to MongoDB database.

### Configuration

1. **Database**: `Infodra_db`
2. **Collection**: `Message`

### Environment Variables

Update the `.env.local` file with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

Replace:
- `<username>` with your MongoDB username
- `<password>` with your MongoDB password
- `<cluster>` with your MongoDB cluster address

### Document Structure

Each contact form submission creates a document with the following fields:

```json
{
  "name": "Contact Name",
  "email": "email@example.com",
  "phone": "+91 1234567890",
  "company": "Company Name (optional)",
  "productOrSolution": "Selected product/solution (optional)",
  "message": "User message",
  "createdAt": "2024-03-10T12:00:00.000Z",
  "source": "infodra.ai"
}
```

### API Endpoint

- **URL**: `/api/contact`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Testing

After setting up the MongoDB connection string in `.env.local`:

1. Restart the development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your MongoDB collection for the new document

### Note

Make sure `.env.local` is never committed to version control (it's already in `.gitignore`).
