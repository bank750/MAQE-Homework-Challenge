<template>
    <div class="card-h hover-zoom">
        <div class="card-header">
            <img 
                :src="props?.data?.avatar_url"
                loading="lazy"
                :alt="props?.data?.avatar_url"
                class="author-img" 
                />
            <span class="fullname">{{ props?.data?.name }}</span><span class="posted-date">{{ formatPostedDate(props?.data?.created_at) }}</span>
        </div>
        <div class="card-body">
            <img 
                :src="props?.data?.image_url"
                loading="lazy"
                :alt="props?.data?.image_url"
                class="news-img" 
                />
            <div class="text-wrapper">
                <h2 class="title-text">{{ props?.data?.title }}</h2>
                <div class="body-text line-clamp --6">{{ props?.data?.body }}</div>
            </div>    
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ICardProps } from "@/interface/card.interface"
    import { formatPostedDate } from '@/utils/helper';

    const props = defineProps<ICardProps>()    
    
</script>
<style lang="scss" scoped>
    .card-h {
        position: relative;
        width: 100%;
        cursor: pointer;
        /* box-shadow: 0px 0 5px 1px #c5c6c6;  */
        box-shadow: 5px 2px 5px -5px #c5c6c6, 
        /* Shadow on the left side */
                -5px 2px 5px -5px #c5c6c6;
        border-bottom: 3px solid #c5c6c6;
        background-color: #eee;
    }
    .card-header {
        position: relative;
        width: 100%;
        padding: 8px 15px;
        border-bottom: 2px solid rgba(221, 220, 220, 0.6);
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        .author-img {
            width: 30px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }
        .fullname {
            font-size: 1rem;
            font-weight: 600;
            color: #f7613a;
        }
        .posted-date {
            font-size: 0.9rem;
            font-weight: 500;
            color: #798b9a;
        }        
    }
    .card-body {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 15px;
        grid-gap: 15px;
        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
        
        .news-img {
            min-width: 240px;
            min-height: 180px;
            width: 100%;
            background-color: #a5bdd1;
            object-fit: cover;
            object-position: center;
            @media (max-width: 767px) {
                width: 100%;
                min-height: 265px;
            }
        }
        
        .text-wrapper {
            .title-text {
                margin-top: unset;
                color: #000;
                font-weight: 800;
                font-size: 1.3rem;
            }
            .body-text {
                color: #000;
                font-weight: 500;
                text-wrap: wrap;
                font-size: 1rem;
                line-height: 1.5;
            }
        }
    }
</style>