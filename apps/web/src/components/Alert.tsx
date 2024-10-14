import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

interface IAlertProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (e: boolean) => void;
  title: string;
  description: string;
  actionText: string;
  handleFunc: () => void;
}

const Alert: React.FunctionComponent<IAlertProps> = (props) => {
  return (
    <>
      <AlertDialog
        open={props.isDialogOpen}
        onOpenChange={props.setIsDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{props.title}</AlertDialogTitle>
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white bg-red-500">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={props.handleFunc}>
              {props.actionText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Alert;
