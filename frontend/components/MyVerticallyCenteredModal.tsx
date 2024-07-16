import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { BookService } from '../generated/endpoints';
import Books from '../generated/com/library/model/Books';

interface MyVerticallyCenteredModalProps {
  show: boolean;
  onHide: () => void;
}

const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(currentYear - 1500 + 1), (val, index) => 1500 + index);

  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [year, setYear] = useState<number | ''>(currentYear);
  const [categoryName, setCategoryName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await BookService.findAllCategories();
        setCategories(response)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!bookName.trim()) {
      newErrors.bookName = 'Book name is required';
    }
    if (!authorName.trim()) {
      newErrors.authorName = 'Author name is required';
    }
    if (year === '' || year < 1500 || year > currentYear) {
      newErrors.year = `Year must be between 1500 and ${currentYear}`;
    }
    if (categoryName === 'addNew') {
      if (!newCategory.trim()) {
        newErrors.categoryName = 'New category is required';
      }
    } else if (!categoryName.trim()) {
      newErrors.categoryName = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveBook = async () => {
    if (validateForm()) {
      const selectedCategory = categoryName === 'addNew' ? newCategory : categoryName;
      const newBook: Books = {
        name: bookName,
        author: authorName,
        year: year as number,
        createdDate: new Date().toISOString(),
        categoryName: selectedCategory
      };

      try {
        const response = await BookService.saveBook(newBook);
        if (response.success) {
          setBookName('');
          setAuthorName('');
          setYear(currentYear);
          setCategoryName('');
          setNewCategory('');
          setErrors({});
          props.onHide();
        } else {
          console.error('Error saving book:', response.message);
        }
      } catch (error) {
        console.error('Error saving book:', error);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveBook();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton theme="dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className='d-flex row'>
            <Form.Group className="mb-3 col-sm-6" controlId="formBookName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                isInvalid={!!errors.bookName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.bookName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6" controlId="formAuthorName">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                isInvalid={!!errors.authorName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.authorName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className='d-flex row'>
            <Form.Group className="mb-3 col-sm-6" controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                value={year}
                onChange={(e) => setYear(Number(e.target.value) || '')}
                isInvalid={!!errors.year}
              >
                {years.reverse().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.year}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6" controlId="formCategoryName">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                isInvalid={!!errors.categoryName}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
                <option value="addNew">Add New Category</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.categoryName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          {categoryName === 'addNew' && (
            <Form.Group className="mb-3" controlId="formNewCategory">
              <Form.Label>New Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                isInvalid={!!errors.categoryName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.categoryName}
              </Form.Control.Feedback>
            </Form.Group>
          )}
          <div className="d-flex w-100 justify-content-end">
            <Button className="btn-success mx-2" type="submit">
              Save
            </Button>
            <Button className="btn-danger" onClick={props.onHide}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
