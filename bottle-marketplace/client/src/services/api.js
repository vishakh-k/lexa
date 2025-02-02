import { useState, useCallback } from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunc(...params);
        setData(result.data);
        return result.data;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc]
  );

  return {
    data,
    error,
    loading,
    execute,
  };
};

export const adminAPI = {
  // Orders
  getOrders: async () => {
    const response = await fetch("/api/admin/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return handleResponse(response);
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await fetch(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    });
    return handleResponse(response);
  },

  // Products
  getProducts: async () => {
    const response = await fetch("/api/admin/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return handleResponse(response);
  },

  // Add other admin API methods as needed
};
