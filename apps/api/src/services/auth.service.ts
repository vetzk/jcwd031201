import prisma from '@/prisma';

export const findEmailExist = async (email: string) => {
  try {
    const emailUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailUser) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};
export const findUserViaEmail = async (email: string) => {
  try {
    const emailUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailUser) {
      return emailUser;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};

export const findUsernameExist = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export const findUserAuth = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};

export const findUserId = async (identificationId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        identificationId,
      },
    });

    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};
