import { API_BASE_URL } from './config';

// Helper pour gérer les réponses
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Network response was not ok');
  }
  return response.json() as Promise<T>;
};

// GET
export const get = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse<T>(response);
};
export const getText = async (endpoint: string): Promise<string> => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, { method: 'GET' });
  if (!res.ok) throw new Error('Erreur API');
  return res.text();
};


// POST
export const post = async <T>(endpoint: string, data: unknown): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<T>(response);
};

// PUT
export const put = async <T>(endpoint: string, data: unknown): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<T>(response);
};

// DELETE
export const del = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse<T>(response);
};

export default {
  get,
  post,
  put,
  del,
};
