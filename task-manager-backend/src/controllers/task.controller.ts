import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// ✅ CREATE TASK
export const createTask = async (req: any, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        userId: req.user.userId,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task" });
  }
};

// ✅ GET TASKS (ADVANCED: Pagination + Search + Filter)
export const getTasks = async (req: any, res: Response) => {
  try {
    const { page = 1, limit = 5, status, search } = req.query;

    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.userId,

        // ✅ Filter by completed status
        ...(status !== undefined && {
          completed: status === "true",
        }),

        // ✅ Search by title
        ...(search && {
          title: {
            contains: search,
            mode: "insensitive",
          },
        }),
      },

      // ✅ Pagination
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),

      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// ✅ UPDATE TASK (SECURE)
export const updateTask = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user.userId,
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updated = await prisma.task.update({
      where: { id },
      data: { title },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update task" });
  }
};

// ✅ DELETE TASK (SECURE)
export const deleteTask = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user.userId,
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await prisma.task.delete({
      where: { id },
    });

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};

// ✅ TOGGLE TASK (SECURE)
export const toggleTask = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user.userId,
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updated = await prisma.task.update({
      where: { id },
      data: {
        completed: !task.completed,
      },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to toggle task" });
  }
};