import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UsuarioService";

class UserController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.leilao !== "" && dados.valor !== "" ){
            const newuser = await UserService.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = UserService.listUsers();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;