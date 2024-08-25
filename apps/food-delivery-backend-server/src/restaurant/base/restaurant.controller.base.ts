/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RestaurantService } from "../restaurant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RestaurantCreateInput } from "./RestaurantCreateInput";
import { Restaurant } from "./Restaurant";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantWhereUniqueInput } from "./RestaurantWhereUniqueInput";
import { RestaurantUpdateInput } from "./RestaurantUpdateInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RestaurantControllerBase {
  constructor(
    protected readonly service: RestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Restaurant })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRestaurant(
    @common.Body() data: RestaurantCreateInput
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      data: data,
      select: {
        contactPhone: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Restaurant] })
  @ApiNestedQuery(RestaurantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurants(@common.Req() request: Request): Promise<Restaurant[]> {
    const args = plainToClass(RestaurantFindManyArgs, request.query);
    return this.service.restaurants({
      ...args,
      select: {
        contactPhone: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant({
      where: params,
      select: {
        contactPhone: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() data: RestaurantUpdateInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        where: params,
        data: data,
        select: {
          contactPhone: true,
          createdAt: true,
          description: true,
          id: true,
          location: true,
          name: true,
          rating: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant({
        where: params,
        select: {
          contactPhone: true,
          createdAt: true,
          description: true,
          id: true,
          location: true,
          name: true,
          rating: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async findItems(
    @common.Req() request: Request,
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        availabilityStatus: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        promoActive: true,
        promoPrice: true,
        rating: true,

        restaurant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async connectItems(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async updateItems(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async disconnectItems(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }
}
