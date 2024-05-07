"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./dialogclient.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import validator from "validator";
import LoadingCircle from "@components/LoadingCircle";
import SuccessAlert from "../SuccessAlert";

const DialogClient = () => {
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: null as number | null,
    email: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!info.name || !info.phoneNumber || !info.email) {
      return setError("All fields are required");
    } else if (!validator.isEmail(info.email)) {
      return setError("Invalid email format");
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/feedback", info);
      setError("");
      setLoading(false);
      setIsOpen(false);
      setSuccess(true);
      return res;
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setInfo({
        name: "",
        phoneNumber: null,
        email: "",
      });
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild onClick={() => setIsOpen(true)}>
          <button className={`${styles.btn} w-full sm:w-80 mb-20`}>
            Оставить заявку
          </button>
        </DialogTrigger>
        <DialogContent className={`sm:max-w-[425px] max-w-[325px] text-gray-500 ${styles.DialogContent}`}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          {error && <p className="text-red-500">{error}</p>}

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                className="col-span-3"
                onChange={(e) =>
                  setInfo((prevData) => ({ ...prevData, name: e.target.value }))
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                className="col-span-3"
                type="email"
                autoComplete="email"
                required
                onChange={(e) =>
                  setInfo((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Phone number" className="text-right">
                Phone number
              </Label>
              <Input
                id="phoneNumber"
                className="col-span-3"
                type="number"
                required
                onChange={(e) =>
                  setInfo((prevData) => ({
                    ...prevData,
                    phoneNumber: Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>
          <DialogFooter className="flex items-center justify-center">
            <button className="ml-auto mr-auto" onClick={handleSubmit}>
              {loading ? (
                <div className="w-5">
                  <LoadingCircle />
                </div>
              ) : (
                "Отправить"
              )}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
    </>
  );
};

export default DialogClient;
